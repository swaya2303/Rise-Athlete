/*
  # Initial Schema Setup for ChampionRise

  1. New Tables
    - `athletes`
      - `id` (uuid, primary key)
      - `name` (text)
      - `sport` (text)
      - `story` (text)
      - `image_url` (text)
      - `location` (text)
      - `achievements` (text[])
      - `funding_goal` (integer)
      - `created_at` (timestamp)
    
    - `sponsors`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `email` (text)
      - `tier` (text)
      - `amount` (integer)
      - `created_at` (timestamp)
    
    - `sponsorships`
      - `id` (uuid, primary key)
      - `sponsor_id` (uuid, references sponsors)
      - `athlete_id` (uuid, references athletes)
      - `amount` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Athletes Table
CREATE TABLE athletes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sport text NOT NULL,
  story text,
  image_url text,
  location text,
  achievements text[],
  funding_goal integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE athletes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Athletes are viewable by everyone"
  ON athletes
  FOR SELECT
  TO public
  USING (true);

-- Sponsors Table
CREATE TABLE sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  tier text NOT NULL,
  amount integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sponsor profile"
  ON sponsors
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own sponsor profile"
  ON sponsors
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Sponsorships Table
CREATE TABLE sponsorships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sponsor_id uuid REFERENCES sponsors NOT NULL,
  athlete_id uuid REFERENCES athletes NOT NULL,
  amount integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sponsorships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sponsorships"
  ON sponsorships
  FOR SELECT
  TO authenticated
  USING (
    sponsor_id IN (
      SELECT id FROM sponsors WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own sponsorships"
  ON sponsorships
  FOR INSERT
  TO authenticated
  WITH CHECK (
    sponsor_id IN (
      SELECT id FROM sponsors WHERE user_id = auth.uid()
    )
  );