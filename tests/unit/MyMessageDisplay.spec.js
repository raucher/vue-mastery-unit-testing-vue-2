import MessageDisplay from '@/components/MessageDisplay'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

import { mount, shallowMount } from '@vue/test-utils'

jest.mock('@/services/axios')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('calls getMessage and displays message', async () => {
    const mockedMessage = 'Hello from DB!'
    getMessage.mockResolvedValueOnce({
      text: mockedMessage
    })

    const wrapper = shallowMount(MessageDisplay)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)

    const message = wrapper.find('[data-testid="message"]')
    expect(message.text()).toBe(mockedMessage)
  })
})
