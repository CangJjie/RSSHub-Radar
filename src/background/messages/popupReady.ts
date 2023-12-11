import type { PlasmoMessaging } from "@plasmohq/messaging"
import { getCachedRSS } from "~/background"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("popup ready", req)

  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, ([tab]) => {
    res.send(getCachedRSS(tab.id))
  });
}

export default handler