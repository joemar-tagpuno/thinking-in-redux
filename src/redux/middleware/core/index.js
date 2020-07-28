import actionSplitterMiddleware from "./actionSplitter"
import apiMiddleware from "./api"
import loadingBarMiddleware from "./loading-bar"
import normalizeMiddleware from "./normalize"
import notificationMiddleware from "./notification"
import loggerMiddleware from "./logger"

export default function getCoreMiddleware() {
  return [
    actionSplitterMiddleware,
    apiMiddleware,
    loadingBarMiddleware,
    normalizeMiddleware,
    notificationMiddleware,
    loggerMiddleware
  ]
}
