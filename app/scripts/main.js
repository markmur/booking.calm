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
  '-scarcity_indicator-pss_scarcity_6_left',
  '-scarcity_indicator-pss_scarcity_7_left',
  '-scarcity_indicator-pss_scarcity_8_left',
  'hp-rt-just-booked',
  'js--hp-rt-just-booked',
  'hprt-table-cheapest-block-banner-wrapper',
  'sr--justBooked',
  'soldout_property',
  'hotel_overlay_urgency',
  'fe_banner__red',
  'gallery-info__um',
  'maps-concurrent-visitors',
  'hp-rt-recently-booked',
  'js--hp-rt-recently-booked'
]

const classNamesSelector = classNames.map(x => `.${x}`).join(', ')

// Remove each node
const removeNodes = nodes => nodes.forEach(node => node.remove())

// Get DOM nodes from class names
const getDOMNodes = () => [...document.querySelectorAll(classNamesSelector)]

// Create an observer instance linked to the callback function
const observer = new MutationObserver(() => removeNodes(getDOMNodes()))

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
