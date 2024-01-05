window.onload = async () => {
  const loadingTip = addLoadingTip();
  const { spread, designer } = createSpreadAndDesigner();
  const res = await fetch("report-sample.sjs");

  await spread.open(
    await res.blob(),
    function () {
        console.log("成功加载默认报表示例模板 ~~~")
    },
    function (e) {
      console.log(e);
    }
  );
  loadingTip.remove();
  if (designer) {
    designer.refresh();
  }
};

function createSpreadAndDesigner() {
  const demoHost = document.getElementById("demo-host");
  if (window !== top) {
    return {
      spread: new GC.Spread.Sheets.Workbook(demoHost, { sheetCount: 1 }),
    };
  } else {
    const designer = new GC.Spread.Sheets.Designer.Designer(
      demoHost,
      undefined,
      undefined,
      { sheetCount: 1 }
    );
    return {
      designer,
      spread: designer.getWorkbook(),
    };
  }
}
function addLoadingTip() {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.inset = "0";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.background = "white";
  div.style.zIndex = "100";
  div.textContent = "加载模板及数据 ... ...";
  document.body.appendChild(div);
  return div;
}
