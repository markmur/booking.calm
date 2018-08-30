/* eslint-disable no-use-before-define */

const classNames = [
  'lastbooking',
  'sr--x-times-last-time',
  'in-high-demand-not-scarce',
  'only_x_left',
  'sr_rooms_left_wrap',
  'sr_no_desc_users',
  'js_sr_persuation_msg',
  'urgency_message_red',
  'urgency_message_x_people',
  '-scarcity_indicator-pss_scarcity_1_left',
  '-scarcity_indicator-pss_scarcity_2_left',
  '-scarcity_indicator-pss_scarcity_3_left',
  '-scarcity_indicator-pss_scarcity_4_left',
  '-scarcity_indicator-pss_scarcity_5_left',
  'hp-rt-just-booked',
  'js--hp-rt-just-booked',
  'hprt-table-cheapest-block-banner-wrapper',
  'sr--justBooked',
  'soldout_property'
]

const classNamesSelector = classNames.map(x => `.${x}`).join(', ')

const removeNodes = nodes => nodes.forEach(node => node.remove())

const getDOMNodes = () => [...document.querySelectorAll(classNamesSelector)]

removeNodes(getDOMNodes())

const mutationsCallback = () => removeNodes(getDOMNodes())

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutationsCallback)

const retry = () => setTimeout(init, 5)

const init = () => {
  if (!document.body) {
    return retry()
  }

  // Start observing the target node for configured mutations
  observer.observe(document.body, {
    attributes: false,
    childList: true,
    subtree: false
  })
}

init()
