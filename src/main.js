require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var sku1, sku2, sku3;

function restoreParms() {
	sdk.getData(function(objData) {
		if (objData.sku1)
			document.getElementById('text-input-id-1').value = objData.sku1;
		if (objData.sku2)
			document.getElementById('text-input-id-2').value = objData.sku2;
		if (objData.sku3)
			document.getElementById('text-input-id-3').value = objData.sku3;
	});
}

function saveParms() {
	objData = {
		sku1:  document.getElementById('text-input-id-1').value,
		sku2:  document.getElementById('text-input-id-2').value,
		sku3:  document.getElementById('text-input-id-3').value,
	};

	sdk.setData(objData, function(setData) {
	});
}
		
function clickButton() {
			sdk.getContent(function(cContent) {
				sku1 = document.getElementById('text-input-id-1').value;
				sku2 = document.getElementById('text-input-id-2').value;
				sku3 = document.getElementById('text-input-id-3').value;

				cContent = '<p>'+sku1+'</p><p>'+sku2+'</p><p>'+sku3+'</p>';

				sdk.setContent(cContent, function(setContent) {
				});

				saveParms();	// Save options for next time
			});
		}
/*document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintMap, 500)();
});*/
