/****************************************************************
 * @summary change event
****************************************************************/
$(function() {
    $(document).on('change', 'input[name^="fruit"]', function() {
        
        let targetDiv = $(this).closest("div");
        
        let id = null;
        // datalistのdata-id属性の値の取得 ★手入力だとundifined
        id = targetDiv.find(".fruit-select option[value='" + $(this).val() + "']").data('id');
        // hidden項目にセット
        targetHidden = targetDiv.find('input[name^="fruit-Hidden"]');
        targetHidden.val(id);
        
        // 価格表示
        targetVal = targetHidden.val();
        setFruit(targetDiv, targetVal);
    });
});


/****************************************************************
 * @summary 価格表示
****************************************************************/
function setFruit(targetDiv, targetVal) {
    
    let price = 0;
    targetVal = targetVal.slice(6);
    switch (targetVal) {
        case 'id1':
            price = 100;
            break;
        case 'id2':
            price = 200;
            break; 
        case 'id3':
            price = 300;
            break;
        case 'id4':
            price = 400;
            break;
        case 'id5':
            price = 500;
            break; 
    }

    let priceVal = '';
    if (price != 0) {
        priceVal = price + '円';
    } else {
        priceVal = '';
    }
    
    targetDiv.find('input[name^="price"]').val(priceVal);
}