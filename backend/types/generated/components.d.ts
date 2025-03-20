import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoSocialInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_social_infos';
  info: {
    displayName: 'Social_Info';
  };
  attributes: {
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
  };
}

export interface MediaEntry extends Struct.ComponentSchema {
  collectionName: 'components_media_entries';
  info: {
    displayName: 'Entry';
    icon: 'bulletList';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Value: Schema.Attribute.String;
  };
}

export interface MediaFeaturedProject extends Struct.ComponentSchema {
  collectionName: 'components_media_featured_projects';
  info: {
    displayName: 'Featured Project';
    icon: 'archive';
  };
  attributes: {
    Project_Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Project_Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    displayName: 'Image';
    icon: 'feather';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface MediaValues extends Struct.ComponentSchema {
  collectionName: 'components_media_values';
  info: {
    description: '';
    displayName: 'Values';
    icon: 'bulletList';
  };
  attributes: {
    Entry: Schema.Attribute.Component<'media.entry', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.social-info': ContactInfoSocialInfo;
      'media.entry': MediaEntry;
      'media.featured-project': MediaFeaturedProject;
      'media.image': MediaImage;
      'media.values': MediaValues;
    }
  }
}
