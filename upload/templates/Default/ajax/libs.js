/* 
ajax-full-story-DLE 
*/
$(document)
	.on('click', '[data-afs-id]', function () {
		var $this = $(this),
			$data = $this.data();
 
		$.ajax({
				url: dle_root + 'engine/ajax/full-story.php',
				type: 'GET',
				dataType: 'html',
				data: {
					newsId: $data.afsId, // Обязательная переменная
					preset: ($data.afsPreset) ? $data.afsPreset : '', // название файла с настройками
					template: ($data.afsTemplate) ? $data.afsTemplate : '', // Название файла с шаблоном
				},
			})
			.done(function (data) {
				var $html = $(data);
 
				// Данные получены, можно заняться разбором и показать их в диалоге
				// Ниже простейший пример вывода контента в стандартном модальном окне DLE
 
				var modalId = 'afs-' + $data.afsId + '-' + $data.afsPreset + '-' + $data.afsTemplate;
				modalId = modalId.replace(/\//g, "-");
 
				var $modalBlock = $('<div style="display: none;"><div id="' + modalId + '"></div></div>');
 
				$modalBlock
					.appendTo('body')
					.find('#' + modalId)
					.html($html)
					.modal('show');
 
			})
			.fail(function () {
				console.log("full-story error");
			});
	})
	.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', function (e) {
		console.log(e.type);
	});
