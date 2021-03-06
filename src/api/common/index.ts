/*
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-02-04 15:15:52
 */
import { $parseJson2Param } from '@/utils'
import { IObject } from '@/utils/index.type'
import service from '@U/request'
import { ILoginParams } from './index.type'

/**
 * @description: 获取验证码
 * @param {IObject} params
 * @return {string}
 * @author: gumingchen
 */
export function getCaptcha(params: IObject): string {
  let result: string = ''
  const options: IObject = {
    url: '/captcha.jpg',
    method: 'get',
    params: params
  }
  result = `${process.env.VUE_APP_BASE_API + options.url}?${$parseJson2Param(options.params)}`
  return result
}

/**
 * @description: 登录
 * @param {ILoginParams} params
 * @return {*}
 * @author: gumingchen
 */
export function login(params: ILoginParams) {
  return service({
    url: '/admin/login',
    method: 'post',
    data: params
  })
}

/**
 * @description: 获取登录用户信息
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function getUserInfo() {
  return service({
    url: '/admin/user/info',
    method: 'get'
  })
}

/**
 * @description: 获取用户权限菜单
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function getUserMenus() {
  return service({
    url: '/admin/menu/nav',
    method: 'get'
  })
}

export function editUserInfo(params: IObject) {
  return service({
    url: '/admin/user/password',
    method: 'post',
    data: params
  })
}

/**
 * @description: 退出
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function logout() {
  return service({
    url: '/admin/logout',
    method: 'post'
  })
}
