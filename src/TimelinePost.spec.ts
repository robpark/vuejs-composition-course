import {mount} from '@vue/test-utils';
import TimelinePost from "./TimelinePost.vue";
import {todayPost} from "./mocks";

describe('TimelinePost', () => {
  it('renders a post', async () => {
    const wrapper = mount(TimelinePost, {
      props: {post: todayPost}
    })
    expect(wrapper.props('post').id).toBe(todayPost.id)

    const $post = wrapper.get('[data-test="post"]')
    expect($post.exists()).toBe(true)

    const $title = $post.get('[data-test="title"]')
    expect($title.text()).toBe(todayPost.title)

    const $period = $post.find('[data-test="created"]')
    expect($period.text().length).toBeGreaterThan(0)
  })
})
