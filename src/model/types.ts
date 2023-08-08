import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface Database {
  person: PersonTable
}

export interface PersonTable {
  id: Generated<number>
  name: string
  gender: 'man' | 'woman' | 'other'
  created_at: ColumnType<Date, string | undefined, never>
}
export type Person = Selectable<PersonTable>
export type PersonCreate = Insertable<PersonTable>
export type PersonUpdate = Updateable<PersonTable>
