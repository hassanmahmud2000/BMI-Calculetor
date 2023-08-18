document.getElementById('convertButton').addEventListener('click',function(){
    const weightField = document.getElementById('weightArea');
    const weightFieldString = weightField.value;
    const weight = parseFloat(weightFieldString);

    if(isNaN(weight)){
        alert('please! input The Number !!')
        return;
    }
    
    const heightField = document.getElementById('heightArea');
    const heightFieldString = heightField.value;
    const height = parseFloat(heightFieldString);

    if(isNaN(height)){
        alert('please! input The Number !!')
        return;
    }

    const calculetValue = weight / (height*height);
    const valueString = calculetValue.toFixed(2);
    const value = parseFloat(valueString)
    
    const CalculetValueField = document.getElementById('Calulet-value');
    CalculetValueField.innerText = value;

    if(value >= 18.5 && value <= 24.9){
        const factElementField = document.getElementById('factElement')
        factElementField.innerText = 'Normal';
    }
    else if(value >= 25 && value <= 29.9){
        const factElementField = document.getElementById('factElement')
        factElementField.innerText = 'OverWeight';
    }
    else if(value >= 30 && value <= 39.9){
        const factElementField = document.getElementById('factElement')
        factElementField.innerText = 'Obese';
    }
    else if(value > 40 ){
        const factElementField = document.getElementById('factElement')
        factElementField.innerText = 'Morbidly Obese';
    }

    
})