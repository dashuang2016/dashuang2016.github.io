// 页面加载完成后调用函数
		$(document).ready(function(){
			$("#fullpage").fullpage({

				// 配置锚点链接，不应该和autoS从rolling，scrollBar一起使用(使用类active，可以默认打开为该类页面)
				 
				anchors: ['page01','page02','page03','page04'],


				afterLoad:function(link,index){
					switch(index){
						case 1:
						move(".section1 h1").scale(1.2).end();
						move('.section1 p').set('margin-top','50px').end();
						break;
						case 2:
						move('.section2 h1').set('margin-right','-495px').end(function(){
							move('.section2 h1').scale(1.1).end();
						});
						move('.section2-a1').set('margin-left','300px').end();
						move('.section2-a2').set('margin-left','235px').end();
						move('.section2 p').set('margin-left','470px').end();
						break;
						case 3:
						move('.section3 h1').scale(0.5).end();
						move('.section3-a1').scale(0.5).end();
						move('.section3 p').scale(0.5).end();
						break;
						case 4:
						move('.section4 .watch01').rotate(360).end(function(){
							move('.section4 .watch02').rotate(360).end(function(){
								move('.section4 .watch03').rotate(360).end(function(){
									move('.p1').scale(1.2).end(function(){
										move('.p2').scale(1.2).end(function(){
											move('.p3').scale(1.2).end();
										});
									});
								});
							});
						});
						break;
						default:
						break;
					}
				},

				onLeave:function(link,index){
					switch(index){
						case 1:
							move(".section1 h1").scale(1).end();
							move('.section1 p').set('margin-top','-50px').end();
						break;
						case 2:
							move('.section2 h1').set('margin-right','495px').end()
							move('.section2 h1').scale(1).end();
							move('.section2-a1').set('margin-left','75%').end();
							move('.section2-a2').set('margin-left','75%').end();
						break;
						case 3:
						move('.section3 h1').scale(1).end();
						move('.section3-a1').scale(1).end();
						move('.section3 p').scale(1).end();
						break;
						case 4:
						move('.section4 .watch01').rotate(-360).end();
						move('.section4 .watch02').rotate(-360).end();
						move('.section4 .watch03').rotate(-360).end();
						move('.p1').scale(1).end();
						move('.p2').scale(1).end();
						move('.p3').scale(1).end();
						break;
						default:
						break;
					}
				},

				afterRender:function(link,index){
					switch(index){
						case 1:
						break;
						case 2:
						break;
						case 3:
						break;
						case 4:
						break;
						default:
						break;
					}
				},

				// FullPage配置项

				// 设置背景颜色
				// sectionsColor:['green','orange','gray','red'],

				// 设置箭头显示与否（箭头控制幻灯片的展示）
				// controlArrows: true,

				// 设置每一页的内容是否垂直居中,默认false
				verticalCentered: true,

				/*字体是否随着窗口缩放而缩放，默认false
				resize: false,*/

				/*配置页面滚动速度，默认700
				scrollingSpeed: 1000,*/

				

				/*是否锁定锚链接，默认false
				lockAnchors:false,*/
				
				/*定义页面section滚动的动画方式，默认为easeInOutCubic，如果修改此项，需要引入Jquery.easings插件，或者jquery UI
				easing:easeInOutCubic,*/
				
				/*是否使用CSS3 transforms来事先滚动效果，默认true，这个配置项可以提高支持CSS3的浏览器，比如移动设备等的速度，如果浏览器不支持CSS3，则会使用JQUERY来代替CSS3实现效果
				css3: true,*/

				/*滚动到最顶部后是否连续滚动到底部，默认false
				loopTop:false,*/

				/*滚动到最底部后是否连续滚动回顶部，默认false
				loopBottom:false,*/

				/*是否循环滚动，默认false，如果设置true，则页面会循环滚动，不会像loopTop和loopBottom那样出现跳动，，注意这个属性以上两个不兼容，不要同时设置
				continuousVertical:false,*/

				/*横向slider幻灯片是否循环滚动，默认true
				loopHorizontal:true,*/

				/*是否使用插件的滚动法师，默认为true，如果选择false，则会出现浏览器自带的滚动条，将不会按页滚动，而是按照滚动条的默认行为来滚动
				autoScrolling:true,*/

				/*是否包含滚动条，默认为false，如果设置为true，则浏览器自带的滚动条出现，页面滚动式还是按页滚动，但是滚动条的默认行为也有效
				scrollBar:false,*/

				/*设置每一个section顶部和底部的padding，默认都为0，一般如果我们需要设置一二固定在顶部或者底部的菜单，导航，元素等，可以使用这两个配置项
				paddingTop:0,
				paddingBottom:0,*/

				/*固定的元素，默认null，需要配置一个jquery选择器，在页面滚动的时候。fixedElements设置的元素固定不动
				
				比如页面中有<div id="lizi">例子</div>  样式设置为 #lizi{position：fixed;top:0;right:200px;}

				fixedElements:"#lizi"*/
				
				/*是否可以使用方向键导航，默认true
				keyboardScrolling:true,*/

				/*在移动设备中滑动页面的敏感性，默认为5，是否按百分比来衡量，最高为100，越大越难滑动
				touchSensitivity:5,*/


				/*锚链接是否可以控制滚动动画，默认true，如果设置为false，则通过锚链接定位到某个页面显示不再有动画效果
				animateAnchor:true,*/

				/*是否记录历史，默认true，可以记录页面滚动的历史，通过浏览器的前进后退来导航，注意如果设置了autoS从rolling:false,那么这个配置也将被关闭，即设置为false
				recordHistory:true,*/

				/*绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认false，可以设置为菜单的jquery选择器
				
				例子:<ul id="fullpageMenu">
						<li data-menuanchor="page01"><a herf="#page01"></li>
						 <li data-menuanchor="page02"><a herf="#page02"></li>
					 </ul>
					 #fullpageMenu{
					 	position:fixed;
					 }

					 data-menuanchor="page02" <a herf="#page02">都必须有，且里面的page02等需要和之前设置的anchors: ['page01','page02','page03','page04'],一一对应

				menu:'#fullpageMenu'*/
				
				
				/*是否显示导航，默认false，如果设置为true，会显示小圆点，作为导航
				navigation:false,*/

				/*导航小圆点的位置，可以设置为left或者right
				navigationPosition:left,*/
				
				/*导航小圆点的tooltips设置，默认为[],注意按照顺序设置,当鼠标移上去就会出现提示
				navigationTooltips:['1','2','3','4']*/
				
				/*是否显示当前页面的导航的tooltip信息，默认为false,鼠标不用悬浮在小圆点上，小圆点会自动显示当前对应的圆点上的提示信息
				showActiveTooltip:false,*/


				/*是否显示横向幻灯片的导航，默认为false（单独给幻灯片设置导航小圆点
				slidesNavigation:false,*/

				/*横向幻灯片导航的位置，默认为bottom，可以设置为top或者bottom
				slidesNavPosition:bottom,*/

				/*内容超过满屏后是否显示滚动条，默认为false，如果设置为true，则会滚动条，如果要滚动查看内容，还需要jquery-slimscroll.js插件配合，slimscroll插件主要用于模拟传统的浏览器滚动条
				scrollOverflow:false,*/

				/*section的选择器，默认为.section，想要自定义名称就设置，不需要就默认
				sectionSelector:section,*/

				/*slide的选择器，默认为.slide,自定义修改名称时使用
				slideSeclector:slide,*/
			});
		});
