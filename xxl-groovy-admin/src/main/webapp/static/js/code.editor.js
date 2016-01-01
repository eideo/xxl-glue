"use strict";
define(function(require, exports, module) {
	var jquery = require("jquery");
	var ComAlert = require('semantic-comalert');
	
	// init ace-editor
	//require("source-code-pro");
	var ace = require("ace/ace");
	var editor = ace.edit("ace-editor");
	editor.setTheme("ace/theme/idle_fingers");
	editor.getSession().setMode("ace/mode/groovy");
	
<<<<<<< HEAD
	// 初始化页面
	editor.setValue(codeInfo_source);
	
=======
>>>>>>> branch 'master' of https://github.com/xuxueli/xxl-groovy.git
	$("#save").on('click', function(){
		var code = editor.getSession().getValue();
		// or session.getValue
		console.log(code);
		
		$.ajax({
			type : 'POST',
			url : base_url + 'code/updateCode',
			data : {
				'id' : codeInfo_id,
				'source' : code,
				'remark' : codeInfo_remark
			},
			dataType : "json",
			success : function(data){
				if (data.code == 200) {
					ComAlert.alert('提交成功');
					// or session.setValue
				} else {
					ComAlert.alert(data.msg);
				}
			}
		});
	});
<<<<<<< HEAD
=======
	
	// 初始化页面
	if(codeInfo_id){
		editor.setValue(codeInfo_source);
	}
>>>>>>> branch 'master' of https://github.com/xuxueli/xxl-groovy.git
	
});