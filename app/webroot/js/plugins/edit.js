/*function load_plugin_form(id){
    $.getJSON(INTERFACE_URL + "/plugins/ajax_get_plugin/" + id, function(data){
        var form = $('#plugin-edit').slideUp().empty();
        form.append('<form><fieldset>');
        form.append('<legend>Adding plugin <code>' + data.name + '</code>.</legend>');
        form.append('<ol class="plugin-data">');
        form.append('<li><label for="priority">Where should this be placed on the page? (0 means highest)</label>');
        form.append('<input type="number" id="plugin-priority" name="plugin-priority"/></li>');
        form.append('<li><label for="side">Which side of the page should this be on? (1 = left, 0 = right)</label>');
        form.append('<input type="number" id="plugin-side" name="plugin-side"/></li>'); // need a dropdown menu/buttons
        $.each(data.data, function(i, item){
            var name = "plugin-" + i;
            form.append('<li><label for="'+name+'">' + item + '</label>');
            form.append('<input class="extra-data-entry" type="text" id="'+name+'" name="'+name+'"/><li>');
        });
        form.append('</ol></fieldset></form>');
        form.append('<pre>Plugin ID: ' + id + "\nPlugin Name: " + data.name + "\nPlugin info: " + data.info + "</pre>");
        form.append('<input type="submit" class="submit-add-plugin" name="submit" value="Add this plugin!"/>');
        form.slideDown();
    });
}*/

$('.submit-add-plugin').click(function(){
    var priority = $('#plugin-priority').val();
    var left = $('#plugin-side').val();

});