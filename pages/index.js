/* global process */
/* eslint-env browser */

import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "~/theme/index.styles";
import PageWrapper from "~/components/PageWrapper";

class IndexPage extends Component {
  static pageTransitionDelayEnter = true;

  static getInitialProps = ({ query, req, res }) => {
    // do data fetching in here
  };

  state = {};

  componentDidMount = () => {
    $("#login").click(function(){
	    $("#myLogin").modal();
	  });
  	$('#openMyMenu').click(function(event){
  		event.preventDefault();
  		$('#main-menu').addClass('open');
  		$('#closeMenu').addClass('open');
  	});
  	$('#closeMenu').click(function(event) {
  		$('#main-menu').removeClass('open');
  		$(this).removeClass('open');
  	});
  	$('#main-menu ul li').find('ul').each(function(index, el) {
  		$(this).parent().append('<span class="far fa-angle-down show-submenu-mb"></span>');
  	
  	});
  	$('.show-submenu-mb').click(function(event) {
  		$(this).prev('ul').toggleClass('open');
    });
    $('a[data-dr="dropdown"]').click(function(event) {
      $(this).next().toggle('slow');
    });
    $('.home-banner').owlCarousel({
      items: 1,
        loop:true,
        margin:0,
    });
    $('.custom_dropdown').click(function () {
          $(this).attr('tabindex', 1).focus();
          $(this).toggleClass('active');
          $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.custom_dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.custom_dropdown .dropdown-menu li').click(function () {
        $(this).parents('.custom_dropdown').children('.select').find('div').html($(this).html());
        $(this).parents('.custom_dropdown').find('input').attr('value', $(this).attr('data-value'));
    });
    $('.change_step').each(function(index, el) {
    	$(this).click(function(event) {
    		event.preventDefault();
    		var step = $(this).attr('data-step');
    		if (step != '') {
    			$('.step').removeClass('active');
    			$(step).addClass('active');
    			$('.infor-step .title .lg-rs-title').removeClass('active');
    			$('.infor-step .group-bar .bar').removeClass('active');
    			$('.infor-step .title .lg-rs-title[data-step="'+step+'"]').addClass('active');
    			$('.infor-step .group-bar .bar[data-step="'+step+'"]').addClass('active');
    		}
    		
    	});
    });
    $('.bar_the .bar_thuc').each(function(index, el) {
    	var current = $(this).attr('data-value');
    	var max = $(this).attr('data-max');
    	var phantram = Math.round((current/max)*100);
    	$(this).css('width', phantram+'%');
    });
    
    $('.button_edit.edit').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', false);
    	$('form input[type=date]').attr('readonly', false);
    	$('form input[type=password]').attr('readonly', false);
    	$('form select').attr('disabled', false);

    	$('form input[type=text]').parent().removeClass('disable');
    	$('form input[type=date]').parent().removeClass('disable');
    	$('form input[type=password]').parent().removeClass('disable');
    	$('form select').parent().removeClass('disable');

    	$('.button_edit').css('display', 'none');
    	$('.button_edit_hd').css('display', 'inline-block');
    });
    $('.button_edit_hd').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', true);
    	$('form input[type=date]').attr('readonly', true);
    	$('form input[type=password]').attr('readonly', true);
    	$('form select').attr('disabled', true);

    	$('form input[type=text]').parent().addClass('disable');
    	$('form input[type=date]').parent().addClass('disable');
    	$('form input[type=password]').parent().addClass('disable');
    	$('form select').parent().addClass('disable');

    	$('.button_edit').css('display', 'inline-block');
    	$(this).css('display', 'none');
    });
    $('.slides-partner').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:6,
            }
        }
    });
    $('.slides-hot-deals').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-news').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-comments').owlCarousel({
      loop:true,
        margin:30,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-img-store').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
  };

  render = () => (
    <PageWrapper title="PAGE TITLE">
      <div id="closeMenu"></div>
      <header id="main-header">
        <div className="container-fluid">
          <div className="row align-center">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-4">
              <div className="logo">
                <a href="#">
                  <img
                    src="/static/images/logo.svg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-6 menu-responsive">
              <div id="main-menu">
                <ul className="menu-root">
                  <li className="logo-mobile">
                    <a href="#">
                      <img
                        src="/static/images/logo.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="root active">
                    <a href="#">Về MyPoint</a>
                  </li>
                  <li className="root">
                    <a href="#">Tin tức</a>
                    <ul>
                      <li>
                        <a href="#">Menu 1</a>
                        <ul>
                          <li>
                            <a href="#">Menu 1</a>
                          </li>
                          <li>
                            <a href="#">Menu 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Menu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="root">
                    <a href="#">Ưu đãi</a>
                    <ul>
                      <li>
                        <a href="#">Menu 1</a>
                      </li>
                      <li>
                        <a href="#">Menu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="root">
                    <a href="#">Đối tác liên kết</a>
                  </li>
                  <li className="root">
                    <a href="#">Hướng dẫn</a>
                  </li>
                  <li className="root">
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-4 col-sm-4 col-6">
              <div className="search">
                <input
                  type="text"
                  className="input_search"
                  placeholder="Tìm kiếm"
                />
                <a href="#" className="btn_search">
                  <i className="fal fa-search"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block text-right">
              <div className="group_login">
                <a href="#" className="register" id="register">
                  Đăng ký
                </a>
                <a href="#" className="login" id="login">
                  Đăng nhập
                </a>
              </div>
            </div>
            <div className="d-xl-none col-lg-1 col-md-1 col-sm-1 col-2 text-right">
              <a href="#" id="openMyMenu">
                <i className="far fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <section className="banner-slides">
            <div className="home-banner dot-ab owl-carousel owl-theme">
              <div className="item">
                <a href="#">
                  <img src="/static/images/banner_home.svg" alt="1" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/banner_home.svg" alt="2" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/banner_home.svg" alt="3" />
                </a>
              </div>
            </div>
          </section>
          <section className="partner">
            <div className="heading-title">
              <h2>Các thương hiệu đối tác</h2>
              <a href="#" className="float-right view-all">
                Xem tất cả <i className="far fa-angle-right"></i>
              </a>
            </div>
            <div className="slides-partner owl-carousel owl-theme">
              <div className="item">
                <a href="#">
                  <img src="/static/images/Starbuck.png" alt="1" />
                  <p>Starbuck</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/coffee_house.png" alt="1" />
                  <p>The Coffee House</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/logo-lotteria.png" alt="1" />
                  <p>Lotteria</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/Starbuck.png" alt="1" />
                  <p>Starbuck</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/coffee_house.png" alt="1" />
                  <p>The Coffee House</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/logo-lotteria.png" alt="1" />
                  <p>Lotteria</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/Starbuck.png" alt="1" />
                  <p>Starbuck</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/coffee_house.png" alt="1" />
                  <p>The Coffee House</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/logo-lotteria.png" alt="1" />
                  <p>Lotteria</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/Starbuck.png" alt="1" />
                  <p>Starbuck</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/coffee_house.png" alt="1" />
                  <p>The Coffee House</p>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="/static/images/logo-lotteria.png" alt="1" />
                  <p>Lotteria</p>
                </a>
              </div>
            </div>
            <a href="#" className="float-right view-all mobile">
              Xem tất cả <i className="far fa-angle-right"></i>
            </a>
          </section>
          <section className="hot-deals">
            <div className="heading-title">
              <h2>Có thể bạn quan tâm</h2>
            </div>
            <div className="slides-hot-deals  owl-carousel owl-theme">
              <div className="hotdeals-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/hotdeal-1.svg" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Voucher giảm giá 30% hộp quà bánh Trung Thu
                  </a>
                  <div className="group">
                    <a href="#">
                      <img src="/static/images/icon-starbuck.svg" alt="" />
                      <div>&nbsp;</div><div>&nbsp;</div> Starbuck
                    </a>
                    <a href="#" >
                      200 <div>&nbsp;</div><div>&nbsp;</div>
                      <img src="/static/images/icon-point.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hotdeals-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/hotdeal-2.png" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Voucher giảm giá 30% hộp quà bánh Trung Thu
                  </a>
                  <div className="group">
                    <a href="#">
                      <img src="/static/images/icon-starbuck.svg" alt="" />{" "}
                      <div>&nbsp;</div><div>&nbsp;</div> Starbuck
                    </a>
                    <a href="#">
                      200 <div>&nbsp;</div><div>&nbsp;</div>
                      <img src="/static/images/icon-point.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hotdeals-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/hotdeal-1.svg" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Voucher giảm giá 30% hộp quà bánh Trung Thu
                  </a>
                  <div className="group">
                    <a href="#">
                      <img src="/static/images/icon-starbuck.svg" alt="" />
                      <div>&nbsp;</div><div>&nbsp;</div> Starbuck
                    </a>
                    <a href="#">
                      200 <div>&nbsp;</div><div>&nbsp;</div>
                      <img src="/static/images/icon-point.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="float-right view-all mobile">
              Xem tất cả <i className="far fa-angle-right"></i>
            </a>
          </section>
          <section className="news">
            <div className="heading-title">
              <h2>Tin tức</h2>
              <a href="#" className="float-right view-all">
                Xem tất cả <i className="far fa-angle-right"></i>
              </a>
            </div>
            <div className="slides-news owl-carousel owl-theme">
              <div className="news-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/tin-tuc-1.jpg" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?
                  </a>
                  <div className="date-added">25 Tháng 8, 2019 02:47</div>
                </div>
              </div>

              <div className="news-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/tin-tuc-2.jpg" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?
                  </a>
                  <div className="date-added">25 Tháng 8, 2019 02:47</div>
                </div>
              </div>

              <div className="news-item">
                <div className="image">
                  <a href="#">
                    <img src="/static/images/tin-tuc-3.jpg" alt="" />
                  </a>
                </div>
                <div className="description">
                  <a href="#" className="title">
                    Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?
                  </a>
                  <div className="date-added">25 Tháng 8, 2019 02:47</div>
                </div>
              </div>
            </div>
            <a href="#" className="float-right view-all mobile">
              Xem tất cả <i className="far fa-angle-right"></i>
            </a>
          </section>
          <section className="about">
            <div className="about-content">
              <img src="/static/images/bg-group-icon.png" alt="" />
              <div className="about-des">
                <h2>Giới thiệu</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <h3>Cài đặt Mypoint ngay</h3>
                <div className="group-install">
                  <a href="#">
                    <img src="/static/images/android.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/static/images/ios.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-content-mobile">
              <div className="about-des">
                <h2>Giới thiệu</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <h3>Cài đặt Mypoint ngay</h3>
                <div className="group-install">
                  <a href="#">
                    <img src="/static/images/android.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/static/images/ios.png" alt="" />
                  </a>
                </div>
              </div>
              <img src="/static/images/group-icon.svg" alt="" />
            </div>
          </section>
        </div>
      </main>
      <footer id="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img src="/static/images/logo.svg" alt="" className="logo" />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="address">
                  <h3 className="heading-footer">Thông tin liên hệ</h3>
                  <p>
                    <b>Địa chỉ</b>
                    <br />
                    144 Đội Cấn, Ba Đình, Hà Nội
                  </p>
                  <p>
                    <b>Email</b>
                    <br />
                    <a href="mailto:">cskh@mypoint.net</a>
                  </p>
                  <p>
                    <b>Điện thoại</b>
                    <br />
                    <a href="tel:012 345 6789">012 345 6789</a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="infomation">
                  <h3 className="heading-footer">Liên kết</h3>
                  <ul className="list-infor">
                    <li>
                      <a href="#">Về MyPoint</a>
                    </li>
                    <li>
                      <a href="#">Tin tức khuyến mãi</a>
                    </li>
                    <li>
                      <a href="#">Voucher</a>
                    </li>
                    <li>
                      <a href="#">Đối tác liên kết</a>
                    </li>
                    <li>
                      <a href="#">Hướng dẫn</a>
                    </li>
                    <li>
                      <a href="#">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3 className="heading-footer">Kết nối với chúng tôi</h3>
                <div className="group-icon-footer">
                  <a href="#">
                    <img src="/static/images/google.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/static/images/facebook.png" alt="" />
                  </a>
                </div>
                <h3 className="heading-footer">Tải ứng dụng Mypoint</h3>
                <div className="group-icon-footer">
                  <a href="#">
                    <img
                      src="/static/images/android.png"
                      alt=""
                      className="install"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/static/images/ios.png"
                      alt=""
                      className="install"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-sm-6">
                <ul className="f-bot-list">
                  <li>
                    <a href="#">Quy Chế Hoạt Động</a>
                  </li>
                  <li>
                    <a href="#">Điều kiện – Điều khoản</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="copyright text-right">
                  Copyright © 2019 by <a href="#">Mobifone</a>. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </PageWrapper>
  );
}

IndexPage.propTypes = {};

IndexPage.defaultProps = {};

export default IndexPage;
