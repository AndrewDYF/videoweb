layui.config({
  base: '/public/js/',
}).use([ 'form', 'layer', 'jquery' ], function() {
  const form = layui.form,
    layer = parent.layer === undefined ? layui.layer : parent.layer,
    $ = layui.jquery;
  form.on('submit(update)', function() {
    $.ajax({
      url: '/admin/video/update',
      type: 'post',
      data: {
        _id: $('#_id').val(),
        title: $('#title').val(),
        category: $('#category option:selected').val(),
        description: $('#description').val(),
      },
      success(result) {
        if (result) {
          const index = layer.msg('Please wait while the data is updated', {
            icon: 16,
            time: false,
            shade: 0.8,
          });
          setTimeout(function() {
            layer.close(index);
            layer.msg('Data updated successfully！');
            layer.closeAll('iframe');
            window.location.href = '/video/manager';
          }, 2000);
        }
      },
    });
    return false;
  });
});
