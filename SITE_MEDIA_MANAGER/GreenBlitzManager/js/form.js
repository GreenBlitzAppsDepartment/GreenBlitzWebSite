/**
 * Created by tomer on 10/12/14.
 */

function addFormTextArea(idOfForm,Messae){
    var form = document.getElementById(idOfForm);
    var input = document.createElement("textarea");
    input.id = "image1234";
    input.innerHTML = Messae;
    form.appendChild(input);
}
function getTextFromAllChilds(FORM){
        var text;
        var final = "[";
        var form = document.getElementById(FORM);
        alert(FORM);
        for (var i = 0; i < form.length; i++) {
            try {
                if (i != 0) {
                    text = $('#'+$(FORM).index(i).id).val();
                    final = final + "," + '"' + text + '"';
                }
                else {
                    text = $('.second').children().first().val();
                    final = final + '"' + text + '"';
                }
                alert("column " + $(FORM).parent().children().index(this) + " is clicked")
                alert(text);
            }
            catch (x){
                alert(x);
            }
        }
        final = final + "]"
        alert("TA DA" + final);
}
