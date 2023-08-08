import { PersonTable } from '@/model/types';
import { createKysely } from '@vercel/postgres-kysely';

interface Database {
  person: PersonTable;
}

export const db = createKysely<Database>();

await db.insertInto('person').values({
    name: 'Larissa',
    gender: 'woman'
}).execute()
