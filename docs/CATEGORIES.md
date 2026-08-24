# Category Guide

## Overview

The Landing Page Generator supports 20 categories, each with 5 templates and 12 sections.

## Available Categories

| Category | Description | Best For |
|----------|-------------|----------|
| Real Estate | Property showcase | Agents, Developers |
| E-commerce | Online stores | Retailers, Brands |
| SaaS | Software products | Tech companies |
| Healthcare | Medical services | Clinics, Hospitals |
| Education | Learning platforms | Schools, Courses |
| Fintech | Financial services | Banks, Apps |
| Travel | Tourism services | Agencies, Hotels |
| Fashion | Clothing brands | Designers, Stores |
| Food | Restaurants, Cafes | Food businesses |
| Fitness | Gyms, Wellness | Fitness centers |
| Beauty | Cosmetics, Skincare | Beauty brands |
| Automotive | Car dealerships | Dealers, Services |
| Entertainment | Events, Media | Production companies |
| Nonprofit | Charities, Causes | NGOs, Organizations |
| Consulting | Business services | Consultants, Firms |
| Technology | Tech products | Startups, Companies |
| Insurance | Insurance services | Agencies, Brokers |
| Marketing | Digital marketing | Agencies, Freelancers |
| Advertising | Ad agencies | Agencies, Creatives |

## Adding a New Category

1. Create category file in `data/categories/`
2. Define icon, description, colors
3. Add templates
4. Add sections
5. Update exports

### Category Template

```typescript
export const newCategory = {
  id: 'new-category',
  name: 'New Category',
  icon: '🚀',
  description: 'Description here',
  templates: [
    { id: 'template1', name: 'Template 1', ... }
  ],
  colors: ['#color1', '#color2']
}
```
