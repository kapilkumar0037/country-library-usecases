import { ISidebar } from './models';

export class CoreConstants {
  public static sidebar: ISidebar[] = [
    {
      title: 'Default country list',
      description:
        'Country list with flag, country code, country name and dial code',
        route: '/default'
    },
    {
      title: 'Country list with preferred countries',
      description:
        'India and United States selected as preferred',
        route: '/preferred'
    },
    {
        title: 'Country list without some countries',
        description:
          'Albania not in the list',
          route: '/without'
      },
      {
          title: 'Default selected country',
          description:
            'India is selected by default',
            route: '/selected'
        },
        {
            title: 'Display only specific countries',
            description:
              'only India, USA and Afganistan are in list',
              route: '/specific'
          }
  ];
}
