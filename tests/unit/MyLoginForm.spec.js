import LoginForm from '@/components/LoginForm.vue'
import { shallowMount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', async () => {
    const wrapper = shallowMount(LoginForm)
    const input = wrapper.find('input[type="text"]')
    const submitButton = wrapper.find('button')

    input.setValue('Test Name Input')
    await wrapper.trigger('submit')

    const formSubmitCalls = wrapper.emitted('formSubmitted')
    expect(formSubmitCalls).toHaveLength(1)

    const expectedPayload = {
      name: 'Test Name Input'
    }
    const actualPayload = formSubmitCalls[0][0]
    expect(actualPayload).toMatchObject(expectedPayload)
  })
})
