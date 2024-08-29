interface ColumnList {
    /**
     * Key is the name of the column
     */
    [k: string]: {
        /**
         * The type of the column as reported by the underlying DB.
         */
        type: string;
        /**
         * True if the column is nullable, false otherwise.
         */
        nullable: boolean;
    };
}

interface ModifyColumnList {
    /**
     * Key is the name of the column
     */
    [k: string]: {
        /**
         * Value to set column to.
         */
        value: string
        match: ModifyColumnMatch[]
    };
}

interface ModifyColumnMatch {
    operators: Array<{
        column: string,
        pattern: string,
        behaviour: boolean
    }>
}

interface Table {
    /**
     * The name of the table.
     */
    name: string;
    /**
     * The raw SQL schema dump for the table.
     * Null if configured to not dump.
     */
    schema: string | null;
    /**
     * The raw SQL data dump for the table.
     * Null if configured to not dump.
     */
    data: string | null;
    /**
     * The list of column definitions for the table.
     */
    columns: ColumnList;

    modifyColumns: ModifyColumnList;
    /**
     * An ordered list of columns (for consistently outputing as per the DB definition)
     */
    columnsOrdered: Array<string>;
    /**
     * True if the table is actually a view, false otherwise.
     */
    isView: boolean;
    /**
     * A list of triggers attached to the table
     */
    triggers: Array<string>;
}

export { ColumnList, Table };
