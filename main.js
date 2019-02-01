function transform() {
  var input = document.getElementById('xmltext').value;
  var json = xmlToJson.parse(input);
  document.getElementById('jsontext').innerHTML = '<pre>' + JSON.stringify(json, null, 4) + '</pre>';
}

$(function () {
  $.ajax({
    url: './example.xml',
    method: 'GET',
    dataType: 'text',
    success: function (xml) {
      document.getElementById('xmltext').value = xml;
    }
  });
});