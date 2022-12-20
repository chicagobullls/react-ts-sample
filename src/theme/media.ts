import * as R from 'ramda'

const size = {
  mobileExtraSmall: `320px`,
  mobileSmall: '480px',
  mobile: '576px',
  tablet: '768px',
  desktop: '1366px',
}

const getSize = R.prop(R.__, size)

export const device = {
  mobileExtraSmall: `(min-width: ${getSize('mobileExtraSmall')})`,
  mobileSmall: `(min-width: ${getSize('mobileSmall')})`,
  mobile: `(min-width: ${getSize('mobile')})`,
  tablet: `(min-width: ${getSize('tablet')})`,
  desktop: `(min-width: ${getSize('desktop')})`,
}
