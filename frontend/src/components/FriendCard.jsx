import { Link } from "react-router";

const FriendCard = ({ friend, onRemove }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow h-full">
      <div className="card-body p-4 flex flex-col justify-between">
        {/* TOP SECTION: User info + skills */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="avatar size-12">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
            <h3 className="font-semibold truncate">{friend.fullName}</h3>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="font-semibold">Skills Offered:</span>
              {friend.skillsOffered.map((skill, idx) => (
                <span key={`offered-${idx}`} className="badge badge-secondary text-xs">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="font-semibold">Skills Learning:</span>
              {friend.skillsWanted.map((skill, idx) => (
                <span key={`wanted-${idx}`} className="badge badge-outline text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Action buttons */}
        <div className="mt-auto">
          <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full mb-2">
            Message
          </Link>
          <button
            onClick={() => onRemove?.(friend._id)}
            className="btn btn-error btn-sm w-full"
          >
            Remove Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
