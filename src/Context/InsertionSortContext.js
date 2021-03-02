import React from 'react';
// import { BubbleSortAnimation } from 'algorithmAnimation';
import { InsertionSortSteps } from 'algorithms';
import { useSortingContext } from './SortingContext';

const InsertionSortContext = React.createContext();
InsertionSortContext.displayName = 'InsertionSortContext';

function InsertionSortContextProvider(props) {
  const [insertionArray, setInsertionArray] = React.useState(null);
  const [insertionBars, setInsertionBars] = React.useState(15);
  const { animationSpeed, setStartAnimation, setTotalCountedSteps } = useSortingContext();

  // Buttble sort action
  const doInsertionSort = (theArr = []) => {
    setStartAnimation(true);
    // InsertionSort();
    let insertionSortSteps = []; // Insertion sort steps array
    for (let step of InsertionSortSteps(theArr)) {
      InsertionSortSteps.push(step);
    }
    console.log(InsertionSortSteps);
    // console.log(InsertionSortSteps);
    // BubbleSortAnimation(bubbleSortSteps, animationSpeed, setTotalCountedSteps);
    return insertionSortSteps.length;
  };

  const value = {
    insertionArray,
    setInsertionArray,
    insertionBars,
    setInsertionBars,
    doInsertionSort,
  };
  return <InsertionSortContext.Provider value={value} {...props} />;
}

function useInsertionContext() {
  return React.useContext(InsertionSortContext);
}

export { useInsertionContext };

export default InsertionSortContextProvider;
