/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function getContent(url) {
    if (url.toString() === 'dick') {
        var content = $('<img></img>',
                        {src:'http://upload.wikimedia.org/wikipedia/commons/thumb/8/88/46_Dick_Cheney_3x4.jpg/220px-46_Dick_Cheney_3x4.jpg'});
        
        return content;
    } else {
        var content = $('<iframe></iframe>', 
            {id : 'ytplayer',
            type:'text/html',
            src:'http://www.youtube.com/embed/YB2zUSsts60?autoplay=0',
            frameborder:'0'});
        
        return content;
    }
}