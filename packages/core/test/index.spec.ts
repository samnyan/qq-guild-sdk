import { Bot } from '@qq-guild-sdk/core'
import { expect } from 'chai'

declare namespace process {
  let env: {
    id: string
    key: string
    token: string
  }
}

describe('Bot', () => {
  const bot = new Bot({
    app: {
      id: process.env.id,
      key: process.env.key,
      token: process.env.token
    }
  })

  it('should get guilds and guild for target id.', async () => {
    const guilds = await bot.guilds
    expect(guilds).to.be.an('array')
    if (guilds.length > 0) {
      expect(guilds[0]).to.be.an('object')
      expect(guilds[0].name).to.be.eq(await bot.guild(guilds[0].id).then(g => g.name))
    }
  })
})
