define("common/templates/helpers",[],function(){return{}}),define("common/partials_compiled",["handlebars"],function(e){return this.JST=this.JST||{},e.registerPartial("common/footer",e.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div id="footer"><p class="copyright">Copyright ⓒ<a class="corp">NHN Corp.</a>All Rights Reserved.</p></div>'})),this.JST}),define("common/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST["common/alert"]=e.template(function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var o,s="",a="function",c=this.escapeExpression;return s+='<div class="alert alert-',(o=n.type)?o=o.call(t,{hash:{},data:i}):(o=t.type,o=typeof o===a?o.apply(t):o),s+=c(o)+" ",(o=n.custClass)?o=o.call(t,{hash:{},data:i}):(o=t.custClass,o=typeof o===a?o.apply(t):o),s+=c(o)+' fade in" id="',(o=n.id)?o=o.call(t,{hash:{},data:i}):(o=t.id,o=typeof o===a?o.apply(t):o),s+=c(o)+'">\r\n	<button type="button" data-dismiss="alert" class="close">&times;</button>\r\n	<span>',(o=n.msg)?o=o.call(t,{hash:{},data:i}):(o=t.msg,o=typeof o===a?o.apply(t):o),s+=c(o)+"</span>\r\n</div>\r\n"}),this.JST}),define("common/templates/main",["handlebars","./helpers","common/partials_compiled","common/templates_compiled","lodash"],function(e,t,n,r,i){return i.each(t||[],function(t,n){e.registerHelper(n,t)}),r}),define("common/templates",["common/templates/main"],function(e){return e}),define("edit/templates_compiled",["handlebars"],function(e){return this.JST=this.JST||{},this.JST.edit=e.template(function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div id="header" class="navbar navbar-inverse navbar-fixed-top edit-header" role="banner">\r\n	<div class="container">\r\n		<div class="navbar-header">\r\n			<a class="navbar-brand" href="#">RealEdit</a>\r\n		</div>\r\n		<div class="collapse navbar-collapse navbar-ex2-collapse">\r\n			<button type="button" class="btn btn-default btn-xs">New</button>\r\n			<button type="button" class="btn btn-default btn-xs">History</button>\r\n			<button type="button" class="btn btn-default btn-xs">Download</button>\r\n			<div class="user-info pull-right">\r\n				<a href="#">Percy</a>\r\n			</div>\r\n\r\n			<div class="pro-lang pull-right">\r\n				<span>Languages</span>\r\n				<select id="progLang">\r\n					<option value="c">c</option>\r\n					<option value="cpp">c++</option>\r\n					<option value="javascript">javascript</option>\r\n				</select>\r\n			</div>\r\n\r\n			<div class="key-binding pull-right">\r\n				<span>Key Binding</span>\r\n				<select id="keyBinding">\r\n					<option value="ace">ace</option>\r\n					<option value="vim">vim</option>\r\n					<option value="emacs">emacs</option>\r\n					<option value="custom">custom</option>\r\n				</select>\r\n			</div>\r\n        </div>\r\n\r\n		\r\n	</div>\r\n</div>\r\n\r\n<div id="editCon" class="container">\r\n	<div class="clearfix row" style="position:relative">\r\n		<div class="sidebar col-xs-3">\r\n			<div class="user-list panel panel-default">\r\n				<div class="panel-heading">\r\n					Users\r\n				</div>\r\n				<div class="panel-body">\r\n					<ul id="usersList">\r\n					</ul>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="messages panel panel-default">\r\n				<div class="panel-heading">\r\n					Messages\r\n				</div>\r\n				<div class="panel-body">\r\n					<ul id="msgList">\r\n					</ul>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="chat-con panel panel-default">\r\n				<div class="panel-heading">\r\n					Chat\r\n				</div>\r\n				<div class="panel-body">\r\n					<input id="message" type="text" class="form-control">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div id="editor" class="col-xs-9"></div>\r\n	</div>\r\n</div>\r\n'}),this.JST}),define("edit/templates/main",["handlebars","common/templates","edit/templates_compiled","lodash"],function(e,t,n){return n}),define("edit/templates",["edit/templates/main"],function(e){return e}),define("edit/EditView",["lodash","backbone","edit/templates","jquery","common/utils"],function(e,t,n){var r=t.View.extend({tagName:"div",id:"editPage",template:n.edit,events:{},initialize:function(){this.render()},render:function(){this.$el.html(this.template(this.model.toJSON()))}});return r}),define("edit/main",["./EditView","app","backbone","jquery","common/utils"],function(e,t,n,r,i){return function(){function o(){console.log("begin init "),window.editor=ace.edit(a.$el.find("#editor")[0]),r("#editor").height(r(".sidebar").height()),editor.setTheme("ace/theme/textmate"),editor.getSession().setMode("ace/mode/javascript"),editor.focus(),editor.on("change",function(e){console.log(e)})}var s=new n.Model,a=new e({model:s});s.trigger("change"),r("#main").append(a.el),"undefined"==typeof ace?(console.log("undefined"),i.loadScript("/ace-builds-1.1.01/src-noconflict/ace.js",function(){o()})):o(),t.views.push(a)}});
//@ sourceMappingURL=main.js.map