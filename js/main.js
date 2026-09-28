/* ============ Qisheng B2B site ============ */
// 联系人：赵素纳，手机 13790646058 → WhatsApp 号码（+86 前缀）
// 注意：如客户实际 WhatsApp 绑定其他号码，改这里即可
const WHATSAPP_NUMBER = '8613790646058';

(function () {
  var form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var lines = [
      'Hello Qisheng Plastic Gifts,',
      '',
      'Name: ' + (fd.get('name') || '-'),
      'Country: ' + (fd.get('country') || '-'),
      'Business Type: ' + (fd.get('type') || '-'),
      'Product Interest: ' + (fd.get('product') || '-'),
      '',
      'Message: ' + (fd.get('message') || '-')
    ];
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
  });
})();
