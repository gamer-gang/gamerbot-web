<[[general]]>

<[about]>

Show the about message. Pretty simple.

<[help|h]>

Show a message if you're completely clueless.

<[uptime]>

Show the current bot instance's uptime.

<[[media]]>

<[gif]>

Upload and play GIFs.

**`$gif <name>`**

Play a GIF referenced by its name.

**`$gif -l, --list`**

List all available GIFs.

**`$gif -a, --add <name> <url>`**

Upload a GIF from a URL. Content type must be `image/gif`.

**`$gif -r, --rm, --remove <name>`**

Remove a previously uploaded GIF.

**`$gif -m, --mv, --rename <name> <newName>`**

Rename a previously uploaded GIF.

<[[messages]]>

<[apimessage]>

**`$apimessage <...data>`**

Create a message from JSON API data. You can configure your message on <https://discohook.org> or a similar website.

Deletes source message.

<[cowsay]>

**`$cowsay <...msg>`**

You know what it does.

<(FLAGS)>

| Flag           | Description               |
| -------------- | ------------------------- |
| `-d, --delete` | Delete source message.    |
| `-f <cow>`     | Specify a cowfile to use. |
| `-l`           | List all cowfiles.        |

&nbsp;

<(COWFILES)>

Submit additional cowfiles at <https://github.com/wiisportsresort/cowsay>.

<[echo]>

**`$echo <...msg>`**

Echo back a message.

<(FLAGS)>

| Flag           | Description            |
| -------------- | ---------------------- |
| `-d, --delete` | Delete source message. |

<[eggleaderboard|egglb]>

**`$eggleaderboard <user>`**

Show someone else's ranking. User IDs, tags, and mentions should work.

**`$eggleaderboard`**

Show top 25 eggers.

<(FLAGS)>

| Flag       | Description        |
| ---------- | ------------------ |
| `-m, --me` | Show self ranking. |

<[ez]>

Wait, this isn't what I typed!

Deletes source message.

<[joke]>

Fetch and print a joke from various sources. By default, it will fetch a joke from <https://jokeapi.dev>.

<(FLAGS)>

| Flag                | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `-p, --programming` | Fetch only programming jokes from <https://jokeapi.dev>. |
| `-c, --codepen`     | Use CodePen's new project messages as ""jokes"".         |

<[ping]>

Test ping time from the bot instance to the gateway and back.

<[[moderation]]>

<[config]>

**`$config <option>`**

Get the current value of an option.

**`$config <option> <value>`**

Set the config option to a new value.

<(CONFIGURATION OPTIONS)>

| Option         | Type    | Description                                                                                                                                                              |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowSpam      | boolean | Allow the use of `$lorem`, `$spam`, and `$random`.                                                                                                                       |
| egg            | boolean | React to all messages containg eggs.                                                                                                                                     |
| prefix         | string  | Set the bot prefix. ASCII only; max 16 characters,                                                                                                                       |
| welcomeChannel | channel | Set the channel for custom welcome messages. Only useful if `welcomeMessage` is set.                                                                                     |
| welcomeMessage | JSON    | Set the custom welcome message. `%USER%`, `%USERTAG%`, and `%GUILD%` will be replaced with their respective values. JSON data can be created at <https://discohook.org>. |

<[ban]>

**`$ban <user> [...reason]`**

Ban a user from the guild. Both the sender and the bot must have the ability to ban members.

<[unban]>

**`$unban <user>`**

Unban a user from the guild. Both the sender and the bot must have the ability to unban members.

<[kick]>

**`$kick <user> [...reason]`**

Kick a user from the guild. Both the sender and the bot must have the ability to kick members.

<[purge]>

**`$purge <number>`**

Delete the last `n` messages in a channel. Both the sender and the bot must have the ability to delete messages.

`number` must be between 2 and 1000. However, the command can be repeated to delete more than 1000.

Messages older than 14 days cannot be deleted, due to an Discord API limitation.

<[role]>

**WARNING:** currently doesn't work. Use at your own risk.

**`$role <roleId>,<emoji> [...<roleId>,<emoji>]`**

Create a role distributor with the given role IDs and emojis. Note that there is no space in between the role ID and the emoji.

<(EXAMPLE)>

`$role 711667397714771980,1️⃣ 549031297444741120,2️⃣`

<(FLAGS)>

| Flag         | Description                                     |
| ------------ | ----------------------------------------------- |
| `-l, --list` | List all roles in a server with their role IDs. |

<[[music]]>

**NOTE:** music system is currently very buggy and may stop/break often.

<[play|p]>

**`$play <url>`**

Add a track to the queue.

Accepted URLs: Youtube playlists/videos, Spotify albums/playlists/tracks

**`$play` (with music file attatched)**

Add a local file to the queue.

Accepted audio types: anything ffmpeg can process

**`$play <...searchQuery>`**

Search Youtube for a video. Allows the sender to pick from the top 5 results.

**`$play`**

Resumes playback if paused.

<[queue|q]>

**`$queue`**

List the current queue.

<(FLAGS)>

| Flag                         | Description                  |
| ---------------------------- | ---------------------------- |
| `-r, --rm, --remove <index>` | Remove the track at `index`. |
| `--clear`                    | Clear all queued tracks.     |

<[pause]>

Pause playback.

<[resume]>

Resume playback.

<[next|skip]>

Skip current track.

<[previous|prev]>

Skip current track.

<[loop]>

If no flags are present, the loop mode is cycled.

<(FLAGS)>

| Flag         | Description         |
| ------------ | ------------------- |
| `-n, --none` | Disable looping.    |
| `-o, --one`  | Loop current track. |
| `-a, --all`  | Loop entire queue.  |

<[shuffle|shuf]>

Shuffle the queue.

<[playing|np]>

Move the playing embed to the bottom of the channel.

<[stop]>

Stops playback.

<[[spam]]>

All commands require `allowSpam` config option to be true.

<[lorem]>

Lorem ipsum dolor amet something something something. Prints a paragraph of dummy text.

<(FLAGS)>

| Flag                      | Description                     |
| ------------------------- | ------------------------------- |
| `-m, --messages <number>` | Print `n` messages. Maximum 10. |

<[random]>

Prints 2000 chars of random text.

<(FLAGS)>

| Flag                      | Description                     |
| ------------------------- | ------------------------------- |
| `-m, --messages <number>` | Print `n` messages. Maximum 10. |

<[spam]>

**`$spam <...text>`**

Echo back a bunch of text.

<(FLAGS)>

| Flag                         | Description                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| `-r, --repetitions <number>` | Repeat the text `n` times within one message. Cannot overflow 2000 chars. |
| `-f, --fill`                 | Fill 2000 chars per message.                                              |
| `-m, --messages <number>`    | Print `n` messages. Maximum 10.                                           |
| `-t, --tts`                  | Enable TTS. Bot must be able to send TTS messages.                        |

<[[stats]]>

Hypixel statistics.

<[stats]>

**`$stats <username|uuid> [gamemode]`**

Fetch statistics for the given UUID/username. If not provided, `gamemode` defaults to `bedwars`.

Supported gamemodes: `bedwars` (for now)
