import type { Direction } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";

type Point = { readonly x: number; readonly y: number };

function directionTo(from: Point, to: Point): Direction | undefined {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  if (dx === 1 && dy === 0) return "right";
  if (dx === -1 && dy === 0) return "left";
  if (dx === 0 && dy === 1) return "down";
  if (dx === 0 && dy === -1) return "up";
  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const stop = board.onTileClick((at) => {
      const { player } = session.getState().puzzle;
      const direction = directionTo(player, at);
      if (direction) {
        session.dispatch({ kind: "move", direction });
      }
    });
    return stop;
  },
};
