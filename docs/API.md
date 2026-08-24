# API Reference

## Landing Page Generator API

### Generate Landing Page

```typescript
POST /api/generate
```

**Request Body:**

```json
{
  "category": "real-estate",
  "theme": "premium",
  "sections": ["hero", "features", "testimonials"],
  "template": "modern"
}
```

**Response:**

```json
{
  "html": "<!DOCTYPE html>...",
  "css": "/* styles */",
  "js": "// scripts"
}
```

### Get Categories

```typescript
GET /api/categories
```

**Response:**

```json
{
  "categories": [
    {
      "id": "real-estate",
      "name": "Real Estate",
      "icon": "🏡",
      "description": "...",
      "templates": 5
    }
  ]
}
```

### Get Themes

```typescript
GET /api/themes
```

**Response:**

```json
{
  "themes": [
    {
      "id": "premium",
      "name": "Premium",
      "primary": "#0f2027",
      "accent": "#ffd700"
    }
  ]
}
```

### Get Sections

```typescript
GET /api/sections
```

**Response:**

```json
{
  "sections": [
    {
      "id": "hero",
      "name": "Hero",
      "icon": "🏠",
      "description": "Main banner section"
    }
  ]
}
```
