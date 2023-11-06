let copyBlocks = document.querySelectorAll("div.copy-block")

copyBlocks.forEach(div => {
  const btn = div.querySelector("button");
  btn.addEventListener("click", copyToClipboard)
})

function copyToClipboard(evt) {
  const { children } = evt.target.parentElement;
  const { innerHTML } = Array.from(children)[0];

  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", innerHTML);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    const storage = document.createElement('textarea');
    storage.value = innerHTML;
    children[0].appendChild(storage);

    storage.select();
    storage.setSelectionRange(0, 99999);
    // document.execCommand('copy');

    try {
      alert(innerHTML);
      return document.execCommand("copy");
    } catch (e) {
      console.warn("Copy to clipboard failed.", e);
      return false;
    } finally {
      children[0].removeChild(storage);
    }
  }
}