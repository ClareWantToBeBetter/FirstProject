function getOption() {
   let ChangingImage =document.getElementById('kirby-image');

   let changingForm =  document.getElementById("changing-text");
   let textStyleForm = document.getElementById('change-style');
   let newStyleColor = document.getElementById('change-color');
   let newDecoration = document.getElementById('change-decoration');
   let  selectedTextStyle = textStyleForm.options[textStyleForm.selectedIndex].value;
   let  selectedStyleColor = newStyleColor .options[newStyleColor.selectedIndex].value;
   let  selectedDecoration = newDecoration.options[newDecoration.selectedIndex].value;
   let  resultedNewStyle = selectedTextStyle + ' ' + selectedStyleColor;
   changingForm.style.textDecoration = resultedNewStyle;
   changingForm.style.textDecorationStyle = selectedDecoration;
}