import MoreInfo from "@/app/shared/components/moreInfo";
import React, { useEffect, useRef, useState } from "react";
import { BsTrash3 } from "react-icons/bs";

const InvestmentSkill: React.FC<{
  skills: string[];
  setSkills: (skills: string[]) => void;
}> = ({ skills, setSkills }) => {
  const [showTrash, setShowTrash] = useState(-1);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const canAddSkill = (skill: string) => {
    return skill !== "";
  };

  const addSkill = () => {
    const lastSkill = skills[skills.length - 1];
    if (canAddSkill(lastSkill!)) {
      setSkills([...skills, ""]);
    }
  };

  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const deleteSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const refs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    refs.current = skills.map(() => React.createRef<HTMLDivElement>());
  }, [skills]);

  // const inputRefs = skills.map(() => useRef<HTMLDivElement | null>(null));

  return (
    <div className="">
      <MoreInfo
        label="Suggested Skills"
        infoText="Add skills it would help for the worker to have."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={refs.current[index]}
            className="relative flex w-full items-start"
          >
            <input
              type="text"
              value={skill}
              onFocus={() => {
                setActiveSuggestion(index);
              }}
              onMouseEnter={() => {
                setShowTrash(index);
              }}
              onMouseLeave={() => {
                setShowTrash(-1);
              }}
              onChange={(e) => updateSkill(index, e.target.value)}
              className="input w-full rounded bg-secondary px-4 py-2 pr-10 text-white" // Add pr-10 for padding on the right
              placeholder="Enter skill"
              required
            />

            {skills.length > 1 && index === showTrash && (
              <button
                type="button"
                className="absolute right-2 top-3 text-gray-600" // Adjust the positioning
                onClick={() => deleteSkill(index)}
              >
                <BsTrash3 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addSkill}
        className={`mb-4 mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white ${
          !canAddSkill(skills[skills.length - 1]!)
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-blue-600"
        }`}
        disabled={!canAddSkill(skills[skills.length - 1]!)}
      >
        Add Skill
      </button>
    </div>
  );
};

export default InvestmentSkill;
