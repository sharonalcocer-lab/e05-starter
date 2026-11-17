import { hasCrate, type Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const filledGoals =
    puzzle.layout.goals.filter((goal) => hasCrate(puzzle, goal)).length;

  const total = puzzle.layout.goals.length;

  return <p>Goals filled: {filledGoals} of {total}</p>;
}
