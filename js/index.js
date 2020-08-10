window.addEventListener('load', function() {
	let myjd = document.querySelector('.my-jd')
	let content1 = document.querySelector('.content1')
	let buy = document.querySelector('.qiyebuy')
	let content2 = document.querySelector('.content2')
	let fuwu = document.querySelector('.people-fuwu')
	let content3 = document.querySelector('.content3')
	let navs = document.querySelector('.navs-nav')
	let content4 = document.querySelector('.content4')

	//导航栏我的京东 
	myjd.addEventListener('mouseover', function() {
		content1.style.display = 'block'
		myjd.className = 'white'
	})
	myjd.addEventListener('mouseout', function() {
		content1.style.display = 'none'
		myjd.className = ''
	})
	content1.addEventListener('mouseover', function() {
		content1.style.display = 'block'
		myjd.className = 'white'
	})
	content1.addEventListener('mouseout', function() {
		content1.style.display = 'none'
		myjd.className = ''
	})

	//导航栏企业采购
	buy.addEventListener('mouseover', function() {
		content2.style.display = 'block'
		buy.className = 'white'
	})
	buy.addEventListener('mouseout', function() {
		content2.style.display = 'none'
		buy.className = ''
	})
	content2.addEventListener('mouseover', function() {
		content2.style.display = 'block'
		buy.className = 'white'
	})
	content2.addEventListener('mouseout', function() {
		content2.style.display = 'none'
		buy.className = ''
	})

	//导航栏客户服务
	fuwu.addEventListener('mouseover', function() {
		content3.style.display = 'block'
		fuwu.className = 'white'
	})
	fuwu.addEventListener('mouseout', function() {
		content3.style.display = 'none'
		fuwu.className = ''
	})
	content3.addEventListener('mouseover', function() {
		content3.style.display = 'block'
		fuwu.className = 'white'
	})
	content3.addEventListener('mouseout', function() {
		content3.style.display = 'none'
		fuwu.className = ''
	})

	//导航栏网站导航
	navs.addEventListener('mouseover', function() {
		content4.style.display = 'block'
		navs.className = 'white'
	})
	navs.addEventListener('mouseout', function() {
		content4.style.display = 'none'
		navs.className = ''
	})
	content4.addEventListener('mouseover', function() {
		content4.style.display = 'block'
		navs.className = 'white'
	})
	content4.addEventListener('mouseout', function() {
		content4.style.display = 'none'
		navs.className = ''
	})


	//轮播图
	let key = 0
	let arrow_l = document.querySelector('.arrow-l')
	let arrow_r = document.querySelector('.arrow-r')
	let img_scroll = document.querySelector('.img-scroll')
	let focuWidth = img_scroll.offsetWidth
	//动态创建小圆点
	let ul = img_scroll.querySelector('ul')
	let circle = document.querySelector('.circle')
	for (let i = 0; i < ul.children.length - 1; i++) {
		let li = document.createElement('li')
		li.setAttribute('index', i)
		circle.appendChild(li)
		//点击那个小圆圈就给那个小圆圈添加白色背景
		li.addEventListener('click', function() {
			for (let i = 0; i < circle.children.length; i++) {
				circle.children[i].className = ''
			}
			this.className = 'cruuent'
			//点击小圆圈移动
			console.log(focuWidth)
			let index = this.getAttribute('index')
			console.log(index)
			animate(ul, -index * focuWidth)
			key = index
			nums = index
		})
	}
	circle.children[0].className = 'cruuent'
	let nums = 0
	//点击右边侧按钮切换下一张图片
	arrow_r.addEventListener('click', function() {
		if (nums == ul.children.length - 1) {
			ul.style.left = 0
			nums = 0
		}
		nums++
		animate(ul, -nums * focuWidth)
		key++
		if (key == circle.children.length) {
			key = 0
		}
		for (let i = 0; i < circle.children.length; i++) {
			circle.children[i].className = ''
		}
		circle.children[key].className = 'cruuent'

	})
	arrow_l.addEventListener('click', function() {
		if (nums == 0) {
			nums = ul.children.length - 1
			ul.style.left = -nums * focuWidth + 'px'
		}
		nums--
		animate(ul, -nums * focuWidth)
		key--
		if (key < 0) {
			key = circle.children.length - 1
		}
		for (let i = 0; i < circle.children.length; i++) {
			circle.children[i].className = ''
		}
		circle.children[key].className = 'cruuent'
	})
	img_scroll.addEventListener('mouseenter', function() {
		clearInterval(set)
		set = null
	})
	img_scroll.addEventListener('mouseleave', function() {
		set = setInterval(function() {
			arrow_r.click()
		}, 1500)
	})
	let set = setInterval(function() {
		arrow_r.click()
	}, 1500)

	let scroll_right = document.querySelector('.scroll-right')
	let scroll_right_ul = scroll_right.querySelector('ul')
	let ul_left = scroll_right.offsetWidth
	let scroll_right_left = scroll_right.querySelector('.arrow-l')
	let scroll_right_right = scroll_right.querySelector('.arrow-r')
	console.log(ul_left)
	let num = 0
	scroll_right.addEventListener('mouseover', function() {
		scroll_right_left.style.display = 'block'
		scroll_right_right.style.display = 'block'
	})
	scroll_right.addEventListener('mouseout', function() {
		scroll_right_left.style.display = 'none'
		scroll_right_right.style.display = 'none'
	})
	scroll_right_right.addEventListener('click', function() {
		if (num == scroll_right_ul.children.length - 1) {
			scroll_right_ul.style.left = 0
			num = 0
		}
		num++
		// console.log(scroll_right_ul)
		animate(scroll_right_ul, -num * ul_left)
	})
	scroll_right_left.addEventListener('click', function() {
		if (num == 0) {
			num = scroll_right_ul.children.length - 1
			scroll_right_ul.style.left = -num * ul_left + 'px'

		}
		num--
		// console.log(scroll_right_ul)
		animate(scroll_right_ul, -num * ul_left)
	})
	var scroll_right_timer = setInterval(function() {
		scroll_right_right.click()
	}, 3000)

	//首页倒计时

	let h = document.querySelector('.item-h')
	let m = document.querySelector('.item-m')
	let s = document.querySelector('.item-s')
	var times = setInterval(function() {
		let time = new Date()
		let year = time.getFullYear()
		let month = time.getMonth()
		let data = time.getDate()
		let times = new Date(year, month, data, 23, 59, 59)
		let cha = times - time
		let hour = time.getHours()
		let min = time.getMinutes()
		let sou = time.getSeconds()
		// console.log(Math.floor(cha/1000/60/60/24))
		// console.log(Math.floor(cha/1000/60/60%24))
		// console.log(Math.floor(cha/1000/60/60))
		// console.log(Math.floor(cha/1000%60))
		let zhanh = Math.floor(cha / 1000 / 60 / 60)
		let zhanm = Math.floor(cha / 1000 / 60 - (zhanh * 60))
		let zhans = Math.floor(cha / 1000 - (zhanh * 60 * 60) - (zhanm * 60))

		if (zhanh < 10) {
			h.innerHTML = '0' + zhanh
		} else {
			h.innerHTML = zhanh
		}
		if (zhanm < 10) {
			m.innerHTML = '0' + zhanm
		} else {
			m.innerHTML = zhanm
		}
		if (zhans < 10) {
			s.innerHTML = '0' + zhans
		} else {
			s.innerHTML = zhans
		}
		// h.innerHTML = zhanh
		// m.innerHTML = zhanm
		// s.innerHTML = zhans
	}, 1000)

	//定时器旁边的轮播图
	let item_one_center = document.querySelector('.app-item-one-center')
	let item_one_center_width = item_one_center.offsetWidth
	let item_one_center_ul = item_one_center.querySelector('ul')
	let app_item_one_center_arrow_l = document.querySelector('.app-item-one-center-arrow-l')
	let app_item_one_center_arrow_r = document.querySelector('.app-item-one-center-arrow-r')
	console.log(app_item_one_center_arrow_r)
	let app_num = 0
	app_item_one_center_arrow_r.addEventListener('click', function() {
		if (app_num == item_one_center_ul.children.length - 1) {
			item_one_center_ul.style.left = 0
			app_num = 0
		}
		app_num++
		animate(item_one_center_ul, -app_num * item_one_center_width)

	})
	app_item_one_center_arrow_l.addEventListener('click', function() {
		if (app_num == 0) {
			app_num = item_one_center_ul.children.length - 1
			item_one_center_ul.style.left = -app_num * item_one_center_width + 'px'
		}
		app_num--
		animate(item_one_center_ul, -app_num * item_one_center_width)
	})

	//定时器栏最后侧的小轮播图
	let app_item_one_right = document.querySelector('.app-item-one-right')
	let app_item_one_right_ul = app_item_one_right.querySelector('ul')
	let app_item_one_right_width = app_item_one_right.offsetWidth
	let app_item_one_right_num = 0
	var app_item_one_right_timer = setInterval(function() {
		// console.log(111)
		if (app_item_one_right_num == app_item_one_right_ul.children.length - 1) {
			app_item_one_right_ul.style.left = 0
			app_item_one_right_num = 0
		}
		app_item_one_right_num++
		// console.log(app_item_one_right_num)
		animate(app_item_one_right_ul, -app_item_one_right_num * app_item_one_right_width)
	}, 1500)

	//每日特价栏目
	let jd_spec_left_list = document.querySelector('.jd-spec-left-list')
	let jd_spec_left_list_li = jd_spec_left_list.querySelectorAll('ul li')
	let jd_spec_left_item = document.querySelectorAll('.jd-spec-left-item')
	console.log(jd_spec_left_list_li)
	for (let i = 0; i < jd_spec_left_list_li.length; i++) {
		jd_spec_left_list_li[i].addEventListener('mouseover', function() {
			// console.log(jd_spec_left_item[i])
			for (let i = 0; i < jd_spec_left_item.length; i++) {
				jd_spec_left_item[i].style.display = 'none'
				jd_spec_left_list_li[i].classList.remove('jd-spec-left-list-li-border')
				jd_spec_left_list_li[i].style.color = 'black'
			}
			jd_spec_left_item[i].style.display = 'block'
			this.classList.add('jd-spec-left-list-li-border')
			this.style.color = 'red'
			// console.log(i)
			// console.log(jd_spec_left_item[i])
			// console.log(i)
			// this.style.display = 'block'
		})
	}
	//匀速移动的轮播图
	let sixswper = document.querySelector('.sixswper')
	let sixswper_ul = document.querySelector('.sixswper').querySelector('ul')
	let sixswper_width = sixswper_ul.offsetWidth - 9999
	console.log(sixswper_width)
	// 	开启定时器  让ul匀速左移
	let sixswper_width_time = setInterval(function() {
		if (sixswper_width == -800) {
			sixswper_ul.style.left = 0
			sixswper_width = 0
		} else {
			sixswper_ul.style.left = sixswper_width - 1 + 'px'
			sixswper_width--
			// console.log(sixswper_width)
		}
	}, 10)
	//鼠标经过暂停
	sixswper.addEventListener('mouseover', function() {
		clearInterval(sixswper_width_time)
	})
	//鼠标离开后开启定时器
	sixswper.addEventListener('mouseout', function() {
		sixswper_width_time = setInterval(function() {
			if (sixswper_width == -830) {
				sixswper_ul.style.left = 0
				sixswper_width = 0
			} else {
				sixswper_ul.style.left = sixswper_width - 1 + 'px'
				sixswper_width--
				// console.log(sixswper_width)
			}
		}, 10)
	})

	// 排行榜栏目
	let con_four_center_ul = document.querySelector('.con-four-center>ul')
	let con_four_center_ul_li = con_four_center_ul.querySelectorAll('li')
	let con_four_item = document.querySelectorAll('.con-four-item')
	for (let i = 0; i < con_four_center_ul_li.length; i++) {
		con_four_center_ul_li[i].addEventListener('mouseover', function() {
			// console.log(jd_spec_left_item[i])
			for (let i = 0; i < con_four_item.length; i++) {
				con_four_item[i].style.display = 'none'
				con_four_center_ul_li[i].classList.remove('con-four-item-uls')
				// con_four_center_ul_li[i].style.color = 'black'
			}
			con_four_item[i].style.display = 'block'
			this.classList.add('con-four-item-uls')
			// this.style.color = 'red'
			// console.log(i)
			// console.log(jd_spec_left_item[i])
			// console.log(i)
			// this.style.display = 'block'
		})
	}

	//首页的导航  让浏览器滚动到一定高度导航变为粘性定位
	let stac = document.querySelector('.stac')
	let stacs = document.querySelector('.stacs')
	console.log(stac.offsetTop)
	setInterval(function() {
		if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if (document.body) {
			scrollTop = document.body.scrollTop;
		}
		if (scrollTop > 599) {
			stac.style.display = 'none'
			stacs.style.display = 'block'
			// stac.style.position = 'fixed'
			// stac.style.top = 0 +'px'
		}
		if (scrollTop < 599) {
			stac.style.display = 'block'
			stacs.style.display = 'none'
			// stac.style.position = 'fixed'
			// stac.style.top = 0 +'px'
		}
	}, 10)

	//为你推荐模块 li的点击事件
	let recommended_list = document.querySelector('.recommended-list')
	let recommended_ul_li = recommended_list.querySelectorAll('ul li')
	let recommended_ul_li_p = recommended_list.querySelector('ul').querySelectorAll('p')
	let recommended_ul_li_a = recommended_list.querySelector('ul').querySelectorAll('a')
	let recommended_item = document.querySelectorAll('.recommended-item')
	let hi = 0
	//当li被点击时候将当前的索引号传给hi
	let ih = 0
	//当鼠标经过li的时候  将当前的索引号传给ih
	let flag = true
	//因为如果当前li的p标签的背景颜色为红色的时候  鼠标经过的时候就不可以给红色的字体颜色  所以需
	//要判断，思路便是定义一个flag  他的值是根据hi和ih的值是否相等得到了  相等的话返回true  那么字体
	//不需要变红  相反则变红
	console.log(recommended_ul_li[1])
	for (let i = 0; i < recommended_ul_li.length; i++) {
		recommended_ul_li[i].addEventListener('click', function() {
			for (let i = 0; i < recommended_ul_li.length; i++) {
				recommended_ul_li_p[i].className = ''
				recommended_ul_li_a[i].style.color = '#c4a699'
				recommended_item[i].style.display = 'none'
			}
			recommended_ul_li_p[i].className = 'recommended-ul-li-click'
			recommended_ul_li_a[i].style.color = 'red'
			recommended_item[i].style.display = 'block'
			//将当前鼠标点击的索引号传给hi 
			hi = i
			// console.log(i)
		})

		recommended_ul_li[i].addEventListener('mouseover', function() {
				// console.log(i)
			//将当前鼠标经过的索引号传给ih
			ih = i
			//根据hi和ih的值给flag传值
			if (hi == ih) {
				flag = true
			} else {
				flag = false
			}
			// console.log(flag)
		//根据flag的不同做对应的事情  =>鼠标经过事件
			if (flag == true) {
				recommended_ul_li[i].style.color = ''
			    recommended_ul_li_a[i].style.color = 'red'
			}else{
				recommended_ul_li[i].style.color = 'red'
				recommended_ul_li_a[i].style.color = 'red'
			}
		})
		//鼠标离开事件   一样需要判断 避免用户鼠标经过当前的li时将原本红色的字体变为没有颜色
		recommended_ul_li[i].addEventListener('mouseout', function() {
			// console.log(111)
			if (flag == true) {
				recommended_ul_li[i].style.color = ''
			    recommended_ul_li_a[i].style.color = 'red'
			}else{
				recommended_ul_li[i].style.color = ''
				recommended_ul_li_a[i].style.color = ''
			}
			
		})
	}
	
})
