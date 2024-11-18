import { shallowMount } from '@vue/test-utils'
import MessageContainer from '@/components/MessageContainer.vue'

describe('MessageContainer', () => {
  it('should mount DisplayMessage component', () => {
    const wrapper = shallowMount(MessageContainer, {
      stubs: {
        MessageDisplay:
          '<p data-testid="message">Hallo! Ich bin STUB und Sie?</p>'
      }
    })

    const message = wrapper.find('[data-testid="message"]')

    expect(message.text()).toBe('Hallo! Ich bin STUB und Sie?')
  })
})
