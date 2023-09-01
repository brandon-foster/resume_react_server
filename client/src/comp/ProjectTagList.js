import { TagButton } from './portfolio-section/TagButton';

export const ProjectTagList = ({ tagStateMachine, setTagStateMachine }) => {
  return (
    <div>
      {Object.keys(tagStateMachine).map((t, i) =>
        <TagButton key={`tag${i}`} tagName={t} tagStateMachine={tagStateMachine} setTagStateMachine={setTagStateMachine} />
      )}
    </div>
  );
};
