import { tags } from '../../pages/portfolio-section/tags';

export const TagButton = ({ tagName, tagStateMachine, setTagStateMachine }) => {
  function provideTagName(tagKey) {
    return tags[tagKey].name;
  }
  function provideActiveCount() {
    let quantity = 0;
    for (let [, value] of Object.entries(tagStateMachine)) {
      if (value.active === true) {
        quantity++;
      }
    }
    return quantity;
  }
  function deactiveAllExcept(tagName) {
    const newStateMachine = { ...tagStateMachine };
    for (let [, value] of Object.entries(newStateMachine)) {
      value.active = false;
    }
    setTagStateMachine(() => ({
      ...newStateMachine,
      [tagName]: {
        ...newStateMachine[tagName],
        active: true,
      },
    }));
  }
  function activateAll() {
    const newStateMachine = { ...tagStateMachine };
    for (let [, value] of Object.entries(newStateMachine)) {
      value.active = true;
    }
    setTagStateMachine(() => newStateMachine);
  }
  function activateOne() {
    setTagStateMachine(oldStateMachine => ({
      ...oldStateMachine,
      [tagName]: {
        ...oldStateMachine[tagName],
        active: !oldStateMachine[tagName].active,
      },
    }));
  }
  function clickedLastActiveTagRemaining() {
    return provideActiveCount() === 1 && tagStateMachine[tagName].active === true;
  }
  return (
    <a
      href="#"
      className={`btn btn-lg btn-secondary fw-bold ${tagStateMachine[tagName].active && 'border-white bg-white'}`}
      onClick={() => {
        if (clickedLastActiveTagRemaining()) {
          activateAll();
        }
        else {
          deactiveAllExcept(tagName);
        }
      }}
    >
      {provideTagName(tagName)}
    </a>
  );
};