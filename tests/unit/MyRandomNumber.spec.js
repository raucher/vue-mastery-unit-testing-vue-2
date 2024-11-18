import RandomNumber from '@/components/RandomNumber.vue'
import { shallowMount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('at start number should be 0', () => {
    const wrapper = shallowMount(RandomNumber)
    expect(wrapper.html()).toContain('<span id="randomNumber">0</span>')
    expect(wrapper.find('#randomNumber').text()).toBe('0')
  })
  test('by default random number should lay between 1 and 10', async () => {
    const wrapper = shallowMount(RandomNumber)

    const button = wrapper.find('button')
    await button.trigger('click')

    const number = parseInt(wrapper.find('#randomNumber').text())
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(10)
  })

  test('given min max props random number should lay between min/max', async () => {
    const min = 133
    const max = 134

    const wrapper = shallowMount(RandomNumber, {
      propsData: {
        min,
        max
      }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    const number = parseInt(wrapper.find('#randomNumber').text())
    expect(number).toBeGreaterThanOrEqual(min)
    expect(number).toBeLessThanOrEqual(max)
  })
})
