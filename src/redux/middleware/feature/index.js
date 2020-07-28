import { authMiddleware, authChangesMiddleware } from "./auth";
import accountMiddleware from "./account";

/**
 * NOTE:
 * Please observe the order of middlewares
 * That is placed in ordered, based on their functionality and on how they works
 *
 * @returns {*[]}
 */
export default function getFeatureMiddleware() {
  return [authMiddleware, authChangesMiddleware, accountMiddleware];
}
