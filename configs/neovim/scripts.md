### Prettier

```bash
cat > ~/.config/nvim/lua/plugins/formatting.lua << 'EOF'
return {
  {
    "stevearc/conform.nvim",
    opts = {
      formatters_by_ft = {
        javascript = { "prettier" },
        typescript = { "prettier" },
        javascriptreact = { "prettier" },
        typescriptreact = { "prettier" },
        json = { "prettier" },
        css = { "prettier" },
        yaml = { "prettier" },
        markdown = { "prettier" },
      },
      format_on_save = {
        timeout_ms = 500,
        lsp_fallback = true,
      },
    },
  },
}
EOF
```

### Typescript

```bash
cat > ~/.config/nvim/lua/plugins/typescript.lua << 'EOF'
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        ts_ls = {
          settings = {
            typescript = {
              preferences = {
                quoteStyle = "single",
                semicolons = "remove",
              },
            },
            javascript = {
              preferences = {
                quoteStyle = "single",
                semicolons = "remove",
              },
            },
          },
        },
      },
    },
  },
}
EOF
```

### Lazygit

```bash
cat > ~/.config/nvim/lua/plugins/git.lua << 'EOF'
return {
  {
    "kdheepak/lazygit.nvim",
    cmd = "LazyGit",
    keys = {
      { "<leader>gg", "<cmd>LazyGit<cr>", desc = "LazyGit" },
    },
  },
}
EOF
```

### Italics disabler

```bash
cat > ~/.config/nvim/lua/plugins/theme.lua << 'EOF'
return {
  {
    "folke/tokyonight.nvim",
    opts = {
      styles = {
        comments = { italic = false },
        keywords = { italic = false },
        functions = { italic = false },
        variables = { italic = false },
      },
    },
  },
}
EOF
```
