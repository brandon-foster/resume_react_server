import { PortfolioItemTile } from '../pages/portfolio-section/PortfolioItemTile';
import { notesTileData, puzzleSolverTileData, keyboardTileData, urlAppTileData } from '../pages/portfolio-section/tileData';

export const PortfolioItems = ({ tagStateMachine }) => {
  return (
    <>
      <PortfolioItemTile tileProps={notesTileData} tagStateMachine={tagStateMachine} />
      <PortfolioItemTile tileProps={puzzleSolverTileData} tagStateMachine={tagStateMachine} />
      <PortfolioItemTile tileProps={urlAppTileData} tagStateMachine={tagStateMachine} />
      <PortfolioItemTile tileProps={keyboardTileData} tagStateMachine={tagStateMachine} />
    </>
  );
};