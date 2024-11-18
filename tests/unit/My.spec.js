import { mount, shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('Example test', () => {
  test('my test', () => {
    expect(true).toBeTruthy()
  })
})

describe('Example Vue component test', () => {
  test('If user not logged in, do not show logout button', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user IS logged in, show logout button', async () => {
    const wrapper = shallowMount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
