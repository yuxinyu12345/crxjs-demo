console.log('ceshi')
chrome.runtime.onMessage.addListener(onRuntimeMessage)


// 监听runtime消息
function onRuntimeMessage(request, sender, sendResponse) {
  // Tips: 需要sendResponse,不然可能会阻塞其他消息
  // console.log('back---',request,sender);
  // sendResponse()
  console.log(11)
  console.log($('div').text().trim())
}
