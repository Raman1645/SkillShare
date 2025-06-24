import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router';
import { Slack, Mail, Lock } from 'lucide-react';

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const {isPending, error, loginMutation} = useLogin();

    const handleLogin = (e) => {
        e.preventDefault();
        loginMutation(loginData);
    }

  return (
    <div
            className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
        >
            <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden justify-center h-[624px] pt-10 ">
                {/* SIGNUP FORM - LEFT SIDE */}
                <div className="w-full lg:w-3/4 p-4 sm:p-8 flex flex-col">
                    {/* LOGO */}
                    <div className="mb-4 flex items-center justify-start gap-2">
                        <Slack className="size-9 text-primary" />
                        <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                            SkillShare
                        </span>
                    </div>

                    {/* ERROR MESSAGE IF ANY */}
                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error.response.data.message}</span>
                        </div>
                    )}

                    <div className="w-full">
                        <form onSubmit={handleLogin}>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Welcome Back !!!</h2>
                                    <p className="text-sm opacity-70">
                                        Signin to your account to continue your learning adventure!
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {/* EMAIL */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className='size-5 text-base-content/40' />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="example@gmail.com"
                                                className="input input-bordered w-full pl-10"
                                                value={loginData.email}
                                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* PASSWORD */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className='size-5 text-base-content/40' />
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="********"
                                                className="input input-bordered w-full pl-10"
                                                value={loginData.password}
                                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>

                                <button className="btn btn-primary w-full" type="submit">
                                    {isPending ? (
                                        <>
                                            <span className="loading loading-spinner loading-xs"></span>
                                            Signing in...
                                        </>
                                    ) : (
                                        "Sign in"
                                    )}
                                </button>

                                <div className="text-center mt-4">
                                    <p className="text-sm">
                                        Don't have an account?{" "}
                                        <Link to="/signup" className="text-primary hover:underline">
                                            Create one
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* SIGNUP FORM - RIGHT SIDE */}

            </div>
            <div className="hidden lg:flex w-full lg:w-[55%] bg-primary/10 items-center justify-center h-[624px]">
                <div className="max-w-md p-8">
                    {/* Illustration */}
                    <div className="relative aspect-square max-w-sm mx-auto">
                        <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
                    </div>

                    <div className="text-center space-y-3 mt-6">
                        <h2 className="text-xl font-semibold">Connect with skilled partners worldwide</h2>
                        <p className="opacity-70">
                            Practice, make friends, and improve your skills together
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage