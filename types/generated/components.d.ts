import type { Schema, Attribute } from '@strapi/strapi';

export interface NavBNav extends Schema.Component {
  collectionName: 'components_nav_b_navs';
  info: {
    displayName: 'Nav';
    icon: 'apps';
  };
  attributes: {
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav-b.nav': NavBNav;
    }
  }
}
