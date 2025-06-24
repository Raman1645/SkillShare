import { useState } from 'react';
import useAuthUser from '../hooks/useAuthUser';
import { useMutation ,useQueryClient } from '@tanstack/react-query';
import { completeOnboarding } from '../lib/api';
import toast from 'react-hot-toast';
import { CameraIcon, LoaderIcon, ShuffleIcon, Slack } from 'lucide-react';
import {SKILLS} from "../constants"

const OnboardingPage = () => {

    const {authUser} = useAuthUser();
    const queryClient = useQueryClient();

    const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    skillsOffered: authUser?.skillsOffered || [],
    skillsWanted: authUser?.skillsWanted || [],
    profilePic: authUser?.profilePic || "",
  });

    const {mutate: onboardingMutation, isPending} = useMutation({
        mutationFn: completeOnboarding,
        onSuccess: () => {
            toast.success("Profile onboarded successfully")
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to onboard profile");
        },
    });

    const handleRandomAvatar = () => {
    const seed = Math.floor(Math.random() * 1000);
const randomAvatar = `https://api.dicebear.com/8.x/pixel-art/svg?seed=${seed}`;


    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random profile picture generated!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };


  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-3xl shadow-xl">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Complete Your Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PROFILE PIC CONTAINER */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* IMAGE PREVIEW */}
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )}
              </div>

              {/* Generate Random Avatar BTN */}
              <div className="flex items-center gap-2">
                <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
                  <ShuffleIcon className="size-4 mr-2" />
                  Generate Random Avatar
                </button>
              </div>
            </div>

            {/* FULL NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                className="input input-bordered w-full"
                placeholder="Your full name"
              />
            </div>

            {/* BIO */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
                className="textarea textarea-bordered h-24"
                placeholder="Tell others about yourself and your learning goals"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NATIVE LANGUAGE */}
              <div className="form-control">
  <label className="label">
    <span className="label-text">Skills Offering</span>
  </label>

  <div className="border rounded-lg p-2 max-h-40 overflow-y-scroll bg-base-100 shadow-sm">
    {SKILLS.map((group) => (
  <div key={group.category} className="mb-2">
    <h4 className="font-semibold mb-1 text-sm text-primary">{group.category}</h4>
    <div className="grid grid-cols-2 gap-2">
      {group.skills.map((skill) => {
        const value = skill.toLowerCase();
        return (
          <label key={skill} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              value={value}
              checked={formState.skillsOffered.includes(value)}
              onChange={(e) => {
                setFormState((prev) => ({
                  ...prev,
                  skillsOffered: prev.skillsOffered.includes(value)
                    ? prev.skillsOffered.filter((s) => s !== value)
                    : [...prev.skillsOffered, value],
                }));
              }}
            />
            <span>{skill}</span>
          </label>
        );
      })}
    </div>
  </div>
))}

  </div>
</div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Skills Learning</span>
                </label>
                <div className="form-control">

  <div className="border rounded-lg p-2 max-h-40 overflow-y-scroll bg-base-100 shadow-sm">
    {SKILLS.map((group) => (
  <div key={group.category} className="mb-2">
    <h4 className="font-semibold mb-1 text-sm text-primary">{group.category}</h4>
    <div className="grid grid-cols-2 gap-2">
      {group.skills.map((skill) => {
        const value = skill.toLowerCase();
        return (
          <label key={skill} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              value={value}
              checked={formState.skillsWanted.includes(value)}
              onChange={(e) => {
                setFormState((prev) => ({
                  ...prev,
                  skillsWanted: prev.skillsWanted.includes(value)
                    ? prev.skillsWanted.filter((s) => s !== value)
                    : [...prev.skillsWanted, value],
                }));
              }}
            />
            <span>{skill}</span>
          </label>
        );
      })}
    </div>
  </div>
))}

  </div>
</div>

              </div>
            </div>


            {/* SUBMIT BUTTON */}

            <button className="btn btn-primary w-full" disabled={isPending} type="submit">
              {!isPending ? (
                <>
                  <Slack className="size-5 mr-2" />
                  Complete Onboarding
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" />
                  Onboarding...
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage